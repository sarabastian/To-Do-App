class TaskSerializer < ActiveModel::Serializer
  belongs_to :day
  belongs_to :user
  attributes :id, :description, :reminder, :day_id, :user_id
end
