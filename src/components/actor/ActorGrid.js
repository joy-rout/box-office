/* eslint-disable no-undef */
/* eslint-disable react/function-component-definition */

import React from 'react'
import ActorCard from './ActorCard'
import ImageNotFound from '../Images/not-found.png'

const ActorGrid = ({ data }) => {
  return (
    <div>
        {data.map(({ person }) => (
            <ActorCard
                key={person.id}
                name={person.name}
                country={person.country ? person.country.name : null}
                birthday={person.birthday}
                deathday={person.deathday}
                gender={person.gender}
                image={person.image ? person.image.medium : ImageNotFound}
            />
        ))}
    </div>
  )
}

export default ActorGrid