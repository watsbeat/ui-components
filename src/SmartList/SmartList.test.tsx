import React from 'react'
import { mount } from 'enzyme'
import { SmartList } from './SmartList'
import { ListColumn } from './ListColumn'

export interface ITestSmartListItem {
  name: string,
  issuingOrganisation: string,
  expiryDate: string,
  status: string
}

const items = [
  {
    name: 'Blue Card',
    issuingOrganisation: 'Queensland Gov.',
    expiryDate: '11 Nov 2004',
    status: 'Expired'
  },
  {
    name: 'Green Card',
    issuingOrganisation: 'Western Australia Gov.',
    expiryDate: '05 Feb 2017',
    status: 'Current'
  }
]

describe('<SmartList />', () => {
  it('should render an Smart List displaying the right data with the right headers', () => {
    const wrapper = mount(
      <SmartList
        id='test-smart-list'
        data={items}
      >
        <ListColumn
          size={{
            md: 6,
            lg: 6
          }}
          header='Qualification'
          cell={(row: ITestSmartListItem) =>
            <div>
              <b>{row.name}</b>
              <div>{row.issuingOrganisation}</div>
            </div>
          }
        />
        <ListColumn
          size={{
            md: 3,
            lg: 3
          }}
          header='Expiry Date'
          cell={(row: ITestSmartListItem) => row.expiryDate}
        />
        <ListColumn
          size={{
            md: 3,
            lg: 3
          }}
          header='Status'
          cell={(row: ITestSmartListItem) => row.status}
        />
      </SmartList>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render an Smart List with a single column', () => {
    const wrapper = mount(
      <SmartList
        id='test-smart-list-single-column'
        data={items}
      >
        <ListColumn
          size={{
            md: 6,
            lg: 6
          }}
          header='Qualification'
          cell={(row: ITestSmartListItem) =>
            <div>
              <b>{row.name}</b>
              <div>{row.issuingOrganisation}</div>
            </div>
          }
        />
      </SmartList>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a headerless Smart List displaying the right data with the right title', () => {
    const wrapper = mount(
      <SmartList
        id='test-smart-list'
        title='My List Title'
        data={items}
      >
        <ListColumn
          size={{
            md: 6,
            lg: 6
          }}
          cell={(row: ITestSmartListItem) =>
            <div>
              <b>{row.name}</b>
              <div>{row.issuingOrganisation}</div>
            </div>
          }
        />
        <ListColumn
          size={{
            md: 3,
            lg: 3
          }}
          cell={(row: ITestSmartListItem) => row.expiryDate}
        />
        <ListColumn
          size={{
            md: 3,
            lg: 3
          }}
          cell={(row: ITestSmartListItem) => row.status}
        />
      </SmartList>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render an empty Smart List displaying the right data empty list text', () => {
    const wrapper = mount(
      <SmartList
        id='test-smart-list'
        data={[]}
      >
        <ListColumn
          size={{
            md: 6,
            lg: 6
          }}
          cell={(row: ITestSmartListItem) =>
            <div>
              <b>{row.name}</b>
              <div>{row.issuingOrganisation}</div>
            </div>
          }
        />
        <ListColumn
          size={{
            md: 3,
            lg: 3
          }}
          cell={(row: ITestSmartListItem) => row.expiryDate}
        />
        <ListColumn
          size={{
            md: 3,
            lg: 3
          }}
          cell={(row: ITestSmartListItem) => row.status}
        />
      </SmartList>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
