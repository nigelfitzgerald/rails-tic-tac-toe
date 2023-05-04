class ChangeWinsToWinInGame < ActiveRecord::Migration[7.0]
  def change
    rename_column(:games, :wins, :win)
  end
end
