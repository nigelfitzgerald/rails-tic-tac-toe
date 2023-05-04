class GameController < ApplicationController
  def play
    @game = Game.new
    @user = current_user
    @games = @user.games
    @wins = 0
    @games.each { |game| @wins += game.win }
  end

  def create
    @game = Game.new(user: current_user, win: userwins? ? 1 : 0)
  end
end
