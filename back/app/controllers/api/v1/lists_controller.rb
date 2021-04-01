module Api
  module V1
      class ListsController < ApplicationController
        def index
          lists = List.order(updated_at: :desc)
          render json: lists
        end

        def show
          list = List.find(params[:id])
          render json: list
        end

        def create
          list = List.new(list_params)
          if list.save
            render json: list
          else
            render json: list.errors, status: 442
          end
        end

        def update
          list = List.find(params[:id])
          if list.update(list_params)
            render json: list
          else
            render json: list.errors, status: 422
          end
        end

        def destroy
          if List.destroy(params[:id])
            head :no_content
          else
            render json: {error: "Failed to destroy"}, status: 422
          end
        end

        def destroy_all
          if List.destroy_all
            head :no_content
          else
            render json: {error: "Failed to destroy"}, status: 422
          end
        end

        private

        def list_params
          params.require(:list).permit(:name, :is_completed)
        end
      end
  end
end