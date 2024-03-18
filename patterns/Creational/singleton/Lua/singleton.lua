-- Singleton Logger Class
Logger = {}

-- Private member for the singleton instance
local instance

-- Constructor
function Logger:new()
    local obj = {}
    setmetatable(obj, self)
    self.__index = self
    return obj
end

-- Function to get or create the singleton instance
function Logger.getInstance()
    if not instance then
        instance = Logger:new()
        -- Additional logger can be done here
    end
    return instance
end


local logger1 = Logger.getInstance()
local logger2 = Logger.getInstance()

-- Check if both instances are the same
print(logger1 == logger2)  
-- output: true

-- example method to log a message
function Logger:log(message)
    print(os.date("[%Y-%m-%d %H:%M:%S]") .. " " .. message)
end

logger1:log("This is a log message.")
logger2:log("Another log message.")
