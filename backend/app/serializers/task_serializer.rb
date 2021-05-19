class TaskSerializer < ActiveModel::Serializer
  belongs_to :day

  attributes :id, :description, :reminder, :day_id
end
