class DaySerializer < ActiveModel::Serializer
  has_many :tasks
  attributes :id, :date
end
