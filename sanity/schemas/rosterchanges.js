export default {
  name: 'rosterChanges',
  title: 'Roster Changes',
  type: 'document',
  fields: [
    {
      name: 'rosterChange',
      title: 'Roster Change',
      type: 'string',
    },
    {
      name: 'player',
      title: 'Player',
      description: 'The player who has changed teams',
      type: 'reference',
      to: [
        { type: 'player' },
        { type: 'staff' },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'oldTeam',
      title: 'Old Team',
      description: 'The old team of the player',
      type: 'reference',
      to: [{ type: 'team' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'newTeam',
      title: 'New Team',
      description: 'The new team of the player',
      type: 'reference',
      to: [{ type: 'team' }],
    },
    {
      name: 'date',
      title: 'Date',
      description: 'The date of the roster change',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'transactionDetails',
      title: 'Transaction Details',
      description: 'The details of the transaction',
      type: 'text',
    },
    {
      name: 'reference',
      title: 'Reference',
      description: 'The reference of the roster change',
      type: 'url',
    }
  ],
}