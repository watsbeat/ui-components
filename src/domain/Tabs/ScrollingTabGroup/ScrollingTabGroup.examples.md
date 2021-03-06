#### Standard list of tabs

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

initialState = {
  openTab: 0
};

<ScrollingTabGroup
  onTabChange={(tab, index) => setState({ openTab: index })}
  currentTab={state.openTab}
  tabs={[
    {
      title: 'Tab 1'
    },
    {
      title: 'Tab 2'
    },
    {
      title: 'Tab 3'
    },
    {
      title: 'Tab 4'
    },
    {
      title: 'Tab 5',
      rightComponent: <FontAwesomeIcon type='solid' icon='check' />
    }
  ]}
/>
```

#### Many Tabs

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

initialState = {
  openTab: 0
};

<ScrollingTabGroup
  onTabChange={(tab, index) => setState({ openTab: index })}
  currentTab={state.openTab}
  tabs={[
    { title: 'Tab 1' },
    { title: 'Long Tab Title 2' },
    { title: 'Tab 3'},
    { title: 'Long Tab Title 4' },
    { title: 'Tab 5'},
    { title: 'Long Tab Title 6' },
    { title: 'Tab 7'},
    { title: 'Long Tab Title 8' },
    { title: 'Tab 9'},
    { title: 'Long Tab Title 10' },
    { title: 'Tab 11'}
  ]}
/>
```

#### Tabs with anchors

Anchors can be used instead of onTabChange callbacks. This is useful for
page-level tabs, where your SPA router can get the tab state from the url
rather than storing it in the parent.

Note that this doesn't work in the styleguide as anchors are used to link
between pages.

```jsx
<ScrollingTabGroup
  currentTab='#goodbye'
  tabs={[
    {
      title: 'Tab 1',
      anchorId: '#hello'
    },
    {
      title: 'Tab 2',
      anchorId: '#goodbye'
    },
    {
      title: 'Tab 3',
      anchorId: '#tab-3'
    }
  ]}
  anchorsUpdateUrl
/>
```
