module Api
  module V1
    class CountsController < ApplicationController
      def show
        count = Count.find(params[:id])
        render json: count
      end
  
      def create
        count = Count.new(count_params)
        if count.save
          render json: count
        else
          render json: count.errors, status: 422
        end
      end
  
      def update
        count = Count.find(params[:id])
        if count.update(count_params)
          render json: count
        else
          render json: count.errors, status: 422
        end
      end
    
      private
    
      def count_params
        params.require(:count).permit(:number)
      end
    end
  end
end