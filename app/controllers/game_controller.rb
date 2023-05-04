class GameController < ApplicationController
  def play
    @game = Game.new
    @user = current_user
    @games = @user.games
    @wins = 0
    @games.each { |game| @wins += game.win }
  end

  def create
    if condition
      if @user#(wins)
        @game = Game.new(wins: 1)
      else
        @game = Game.new(wins: 0)
      end
      if @game.save
      end
    end
  end
end
