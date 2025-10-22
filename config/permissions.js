module.exports = {
  LEVELS: {
    OWNER: {
      LEVEL: 4,
      ROLES: ["SERVER_OWNER_ROLE_ID_HERE"],
      USERS: ["YOUR_USER_ID_HERE"]
    },
    ADMIN: {
      LEVEL: 3,
      ROLES: ["ADMIN_ROLE_ID_HERE"],
      USERS: []
    },
    MODERATOR: {
      LEVEL: 2,
      ROLES: ["MOD_ROLE_ID_HERE", "ADMIN_ROLE_ID_HERE"],
      USERS: []
    },
    MEMBER: {
      LEVEL: 1,
      ROLES: ["MEMBER_ROLE_ID_HERE", "VETERAN_ROLE_ID_HERE"],
      USERS: []
    },
    EVERYONE: {
      LEVEL: 0,
      ROLES: [],
      USERS: []
    }
  },

  COMMANDS: {
    OWNER: ['shutdown', 'eval', 'config'],
    ADMIN: ['ban', 'kick', 'mute', 'purge', 'announce'],
    MODERATOR: ['warn', 'clear', 'slowmode', 'lock'],
    MEMBER: ['serverinfo', 'userinfo', 'avatar'],
    EVERYONE: ['help', 'ping', 'roles']
  }
};
