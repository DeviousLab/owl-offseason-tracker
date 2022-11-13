export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'The name of the staff member',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'username',
      title: 'Username',
      description: 'The in-game username of the staff member',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      description: 'The image of the staff member',
      type: 'image',
    },
    {
      name: 'hometown',
      title: 'Hometown',
      description: 'The hometown of the staff member',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'username',
        maxLength: 100,
      }
    },
    {
      name: 'currentStatus',
      title: 'Current Status',
      description: 'The current status of the staff member in the League',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Inactive', value: 'inactive' },
          { title: 'Retired', value: 'retired' },
          { title: 'Looking For Team', value: 'lft' },
        ]
      }
    },
    {
      name: 'role',
      title: 'Role',
      description: 'The role of the staff member',
      type: 'string',
    },
    {
      name: 'formerTeam',
      title: 'Former Team',
      description: 'The former team of the staff member',
      type: 'reference',
      to: [{ type: 'team' }],
    },
    {
      name: 'newTeam',
      title: 'New Team',
      description: 'The new team of the staff member',
      type: 'reference',
      to: [{ type: 'team' }],
    },
    {
      name: 'twitter',
      title: 'Twitter',
      description: 'The Twitter handle of the staff member',
      type: 'url',
    },
    {
      name: 'twitch',
      title: 'Twitch',
      description: 'The Twitch channel of the staff member',
      type: 'url',
    },
    {
      name: 'liquipedia',
      title: 'Liquipedia',
      description: 'The Liquipedia page of the staff member',
      type: 'url',
    }
  ],
}