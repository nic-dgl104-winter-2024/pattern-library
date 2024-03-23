print("Hello World!")-- Subject class
local GameSubject = {}
GameSubject.__index = GameSubject

function GameSubject:new()
    local obj = {}
    setmetatable(obj, GameSubject)
    obj.observers = {}
    obj.score = 0
    return obj
end

function GameSubject:attach(observer)
    table.insert(self.observers, observer)
end

function GameSubject:detach(observer)
    for i, obs in ipairs(self.observers) do
        if obs == observer then
            table.remove(self.observers, i)
            return
        end
    end
end

function GameSubject:notify()
    for _, observer in ipairs(self.observers) do
        observer:updateScore(self.score)
    end
end

function GameSubject:setScore(score)
    self.score = score
    self:notify()
end

-- Observer class
local ScoreObserver = {}
ScoreObserver.__index = ScoreObserver

function ScoreObserver:new()
    local obj = {}
    setmetatable(obj, ScoreObserver)
    return obj
end

function ScoreObserver:updateScore(score)
    print("Score updated:", score)
    -- Update UI or perform other actions related to score change
end

-- Example usage
local game = GameSubject:new()
local scoreDisplay = ScoreObserver:new()

game:attach(scoreDisplay)

-- Simulate score changes in the game
game:setScore(100)
game:setScore(200)

-- Detach observer
game:detach(scoreDisplay)

-- No notification after detaching
game:setScore(300)