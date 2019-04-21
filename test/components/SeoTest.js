import React from 'react'
import Seo from 'src/components/Seo'
import { test } from 'ava'
import { shallow } from 'enzyme'

const metaSelector = ({ name, content }) => `meta[name=${name}]`

test('it sets the page title', t => {
  const wrapper = shallow(
    <Seo title="my title" description="this is a description" />
  )
  t.is(wrapper.find('title').props().contents, 'my title')
})
