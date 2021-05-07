class Api::V1::TasksController < ApplicationController
    def index
        @tasks = Task.all
        render json: @tasks
    end

    def show
        @task = Task.find(params[:id])
        render json: @task
    end

    def create
        @task = Task.create(task_params)
        render json: @task
    end

    
    
      def update
        @task = Task.find(params[:id])
        @task.update
        if @task.save
          render json: @task, status: :accepted
        else
          render json: { errors: @task.errors.full_messages }, status: :unprocessible_entity
        end
      end
      
    def destroy
        task = Task.find(params[:id])
        task.delete

    end
      private
    
      def task_params
        params.permit(:description, :reminder, :day_id, :user_id)
      end
end
