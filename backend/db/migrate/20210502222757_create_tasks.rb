class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :description
      t.datetime :reminder
      t.integer :day_id
      t.integer :user_id

      t.timestamps
    end
  end
end
