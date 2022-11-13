export default {
  name: 'player',
  title: 'Player',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'The name of the player',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'username',
      title: 'Username',
      description: 'The in-game username of the player',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      description: 'The image of the player',
      type: 'image',
    },
    {
      name: 'hometown',
      title: 'Hometown',
      description: 'The hometown of the player',
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
      description: 'The current status of the player in the League',
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
      type: 'string',
      options: {
        list: [
          { title: 'Tank', value: 'tank' },
          { title: 'Damage', value: 'damage' },
          { title: 'Support', value: 'support' },
        ]
      }
    },
    {
      name: 'formerTeam',
      title: 'Former Team',
      description: 'The former team of the player',
      type: 'reference',
      to: [{ type: 'team' }],
    },
    {
      name: 'newTeam',
      title: 'New Team',
      description: 'The new team of the player',
      type: 'reference',
      to: [{ type: 'team' }],
    },
    {
      name: 'signatureHeroes',
      title: 'Signature Heroes',
      description: 'The signature heroes of the player',
      type: 'string',
      options: {
        list: [
          { title: 'Ana', value: 'ana' },
          { title: 'Ashe', value: 'ashe' },
          { title: 'Baptiste', value: 'baptiste' },
          { title: 'Bastion', value: 'bastion' },
          { title: 'Brigitte', value: 'brigitte' },
          { title: 'D.Va', value: 'dva' },
          { title: 'Doomfist', value: 'doomfist' },
          { title: 'Echo', value: 'echo' },
          { title: 'Genji', value: 'genji' },
          { title: 'Hanzo', value: 'hanzo' },
          { title: 'Junkrat', value: 'junkrat' },
          { title: 'Lucio', value: 'lucio' },
          { title: 'Cassidy', value: 'cassidy' },
          { title: 'Mei', value: 'mei' },
          { title: 'Mercy', value: 'mercy' },
          { title: 'Moira', value: 'moira' },
          { title: 'Orisa', value: 'orisa' },
          { title: 'Pharah', value: 'pharah' },
          { title: 'Reaper', value: 'reaper' },
          { title: 'Reinhardt', value: 'reinhardt' },
          { title: 'Roadhog', value: 'roadhog' },
          { title: 'Sigma', value: 'sigma' },
          { title: 'Soldier: 76', value: 'soldier76' },
          { title: 'Sombra', value: 'sombra' },
          { title: 'Symmetra', value: 'symmetra' },
          { title: 'Torbjörn', value: 'torbjorn' },
          { title: 'Tracer', value: 'tracer' },
          { title: 'Widowmaker', value: 'widowmaker' },
          { title: 'Winston', value: 'winston' },
          { title: 'Wrecking Ball', value: 'wreckingball' },
          { title: 'Zarya', value: 'zarya' },
          { title: 'Zenyatta', value: 'zenyatta' },
          { title: 'Junkerqueen', value: 'junkerqueen' },
          { title: 'Sojourn', value: 'sojourn' },
          { title: 'Kiriko', value: 'kiriko' },
        ],
      }
    },
    {
      name: 'twitter',
      title: 'Twitter',
      description: 'The Twitter handle of the player',
      type: 'url',
    },
    {
      name: 'twitch',
      title: 'Twitch',
      description: 'The Twitch channel of the player',
      type: 'url',
    },
    {
      name: 'liquipedia',
      title: 'Liquipedia',
      description: 'The Liquipedia page of the player',
      type: 'url',
    },
    {
      name: 'owlProfile',
      title: 'OWL Profile',
      description: 'The Overwatch League profile of the player',
      type: 'url',
    }
  ],
}