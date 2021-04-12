class Count < ApplicationRecord
  after_initialize :set_default_values

  private
  def set_default_values
    self.number ||= 0
  end
end
