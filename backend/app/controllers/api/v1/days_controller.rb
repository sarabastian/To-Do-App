class Api::V1::DaysController < ApplicationController
    def index
        days = Day.all
        render json: days
    end

    def show
        day = Day.find(params[:id])
        render json: day
    end
end
