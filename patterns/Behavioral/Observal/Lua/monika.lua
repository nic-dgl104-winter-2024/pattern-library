-- Subject class

local GameSubject = {}
GameSubject.__index = GameSubject


-- Constructor for GameSubject

function GameSubject:new()
    local obj = {}       -- Create a new object
    setmetatable(obj, GameSubject)     -- Set the metatable to allow method inheritance
    obj.observers = {}   -- Initialize observers table
    obj.score = 0   -- Initialize score
    return obj    -- Return the newly created object
end

-- Attach observer to the subject

function GameSubject:attach(observer)
    table.insert(self.observers, observer)    -- Add observer to the observers table
end

-- Detach observer from the subject

function GameSubject:detach(observer)
    for i, obs in ipairs(self.observers) do
        if obs == observer then
            table.remove(self.observers, i)    -- Remove observer from the observers table
            return
        end
    end
end

-- Notify all attached observers

function GameSubject:notify()
    for _, observer in ipairs(self.observers) do
        observer:updateScore(self.score)   -- Invoke the updateScore method for each observer
    end
end

-- Set score and notify observers

function GameSubject:setScore(score)
    self.score = score   -- Update score
    self:notify()    -- Notify observers about the score change
end

-- Observer class
local ScoreObserver = {}
ScoreObserver.__index = ScoreObserver

-- Constructor for ScoreObserver 

function ScoreObserver:new()
    local obj = {}   -- Create a new object
    setmetatable(obj, ScoreObserver)    -- Set the metatable to allow method inheritance
    return obj    -- Return the newly created object
end

-- Broadcast function 

function ScoreObserver:updateScore(score)
    print("Player's score has been updated:", score)   -- Print a message indicating the score update
    -- Update UI or perform other actions related to score change
end

-- Example usage

local game = GameSubject:new()    -- Create a new instance of GameSubject
local scoreDisplay = ScoreObserver:new()   -- Create a new instance of ScoreObserver

game:attach(scoreDisplay)   -- Attach the observer to the subject

-- Simulate score changes in the game

game:setScore(100)
game:setScore(200)

-- Detach observer

game:detach(scoreDisplay)

-- No notification after detaching
game:setScore(300)   -- Simulate another score change after detaching observer