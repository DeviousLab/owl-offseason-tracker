export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'The name of the team',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      description: 'The image of the team',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'region',
      title: 'Region',
      description: 'The region of the team',
      type: 'string',
      options: {
        list: [
          { title: 'North America', value: 'na' },
          { title: 'Asia Pacific', value: 'apac' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      }
    },
    {
      name: 'players',
      title: 'Players',
      description: 'The players of the team',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'player' }] }],
    },
    {
      name: 'staff',
      title: 'Staff',
      description: 'The staff of the team',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'staff' }] }],
    },
    {
      name: 'background',
      title: 'Background',
      description: 'The background of the team',
      type: 'image'
    }
  ],
}