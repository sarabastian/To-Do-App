class Api::V1::DaysController < ApplicationController
    def index
        days = Day.all
        render json: days
    end

    def show
        day = Day.find(params[:id])
        render json: day
    end

    def create
       day = Day.create(day_params)
        render json: day
    end

    private

    def day_params
        params.permit(:date)
    end
end
