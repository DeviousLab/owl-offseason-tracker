import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import player from './player'
import team from './team'
import staff from './staff'
import rosterChanges from './rosterchanges'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    player,
    team,
    staff,
    rosterChanges,
  ]),
})
