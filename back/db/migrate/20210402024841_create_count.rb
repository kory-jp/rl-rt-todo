class CreateCount < ActiveRecord::Migration[6.0]
  def up
    create_table :counts do |t|
      t.integer :number

      t.timestamps
    end
  end

  def down
    drop_table :counts
  end
end
