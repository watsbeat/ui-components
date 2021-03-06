#### Basic LegacyDataTable

```jsx
<LegacyDataTable
  data={[
    {
      name: 'Tanner Linsley',
      age: 26
    },
    {
      name: 'Jason Maurer',
      age: 23
    }
  ]}
  columns={[
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Age',
      accessor: 'age'
    }
  ]}
/>
```

#### Empty data table

```jsx
import { Callout } from '@Domain/Callouts';

<LegacyDataTable
  data={[]}
  columns={[
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Age',
      accessor: 'age'
    }
  ]}
  noDataComponent={<Callout type='no-data' shouldFocus={false}>This table has no data!</Callout>}
/>
```

#### LegacyDataTable with right or center aligned content

```jsx
import { Props } from '@Common';

<LegacyDataTable
  data={[
    {
      name: 'Tanner Linsley',
      age: 26
    },
    {
      name: 'Jason Maurer',
      age: 23
    }
  ]}
  columns={[
    {
      Header: 'Name',
      accessor: 'name',
      headerAlignment: Props.Position.Right,
      columnAlignment: Props.Position.Right
    },
    {
      Header: 'Age',
      accessor: 'age',
      headerAlignment: Props.Position.Center,
      columnAlignment: Props.Position.Center
    }
  ]}
/>
```

#### Sortable LegacyDataTable + default sorting

Hold shift to sort on multiple columns

```jsx
import { Callout } from '@Domain/Callouts';

<LegacyDataTable
  data={[
    {
      name: 'Tanner Linsley',
      age: 26
    },
    {
      name: 'Jason Maurer',
      age: 23
    }
  ]}
  columns={[
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Age',
      accessor: 'age'
    }
  ]}
  sortable
  defaultSorted={[
     {
       id: 'age',
       desc: true
     }
   ]}
/>
```

#### Custom Column Components + widths + accessors

```jsx
import { DropdownMenu } from '@Domain/Popovers';

<LegacyDataTable
  data={[
    {
      name: 'Tanner Linsley',
      age: {
        number: 26
      }
    },
    {
      name: 'Jason Maurer',
      age: {
        number: 23
      }
    }
  ]}
  columns={[
    {
      id: 'name',
      Header: 'Name',
      accessor: row => row.name.toUpperCase()
    },
    {
      Header: 'Age',
      accessor: 'age.number',
      width: 100
    },
    {
      accessor: '',
      width: 60,
      sortable: false,
      Cell: () => <DropdownMenu
        sections={[
          {
            text: 'Item 1',
            onClick: () => alert('Item 1')
          },
          {
            text: 'Item 2',
            href: 'https://www.intellihr.com.au'
          }
        ]}
      />
    }
  ]}
  sortable
/>
```

#### Custom Filters

```jsx
import { Callout } from '@Domain/Callouts';

<LegacyDataTable
  data={[
    {
      name: 'Tanner Linsley',
      age: 26
    },
    {
      name: 'Jason Maurer',
      age: 23
    }
  ]}
  columns={[
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Age',
      accessor: 'age'
    },
    {
      Header: 'This column filters to "dog"',
      accessor: '',
      Cell: () => <Callout>Custom</Callout>,
      filterMethod: (filter) => filter.value === 'dog'
    }
  ]}
  showPagination
  showSearchFilter
/>
```

#### Paginated + filterable LegacyDataTable

```jsx
<LegacyDataTable
  data={[{
    "name": "Frederigo Mallebone",
    "age": "15"
  }, {
    "name": "Dewain Treadgall",
    "age": "26"
  }, {
    "name": "Ranna Aberdeen",
    "age": "63"
  }, {
    "name": "Janelle Donisi",
    "age": "12"
  }, {
    "name": "Chaddy Labell",
    "age": "18"
  }, {
    "name": "Pepe Seman",
    "age": "32"
  }, {
    "name": "Loy Roseaman",
    "age": "37"
  }, {
    "name": "Roseline Bradburn",
    "age": "50"
  }, {
    "name": "Graig Franiak",
    "age": "72"
  }, {
    "name": "Eloisa Fernez",
    "age": "17"
  }, {
    "name": "Agnese Jagoe",
    "age": "34"
  }, {
    "name": "Broderick Trenouth",
    "age": "64"
  }, {
    "name": "Giffie Crankhorn",
    "age": "86"
  }, {
    "name": "Mona Dobsons",
    "age": "77"
  }, {
    "name": "Domenic Wyndham",
    "age": "86"
  }, {
    "name": "Chas Egel",
    "age": "28"
  }, {
    "name": "Chantal Dwyer",
    "age": "38"
  }, {
    "name": "Matthias McGuane",
    "age": "64"
  }, {
    "name": "Troy Salleir",
    "age": "87"
  }, {
    "name": "Hyacinthia Illing",
    "age": "30"
  }, {
    "name": "Erv Hinrichs",
    "age": "14"
  }, {
    "name": "Dorette Bearham",
    "age": "13"
  }, {
    "name": "Ave Dobrovolski",
    "age": "51"
  }, {
    "name": "Doe Giacomelli",
    "age": "85"
  }, {
    "name": "Mona Dobsons",
    "age": "77"
  }, {
    "name": "Domenic Wyndham",
    "age": "86"
  }, {
    "name": "Chas Egel",
    "age": "28"
  }, {
    "name": "Chantal Dwyer",
    "age": "38"
  }, {
    "name": "Matthias McGuane",
    "age": "64"
  }, {
    "name": "Troy Salleir",
    "age": "87"
  }, {
    "name": "Hyacinthia Illing",
    "age": "30"
  }, {
    "name": "Erv Hinrichs",
    "age": "14"
  }, {
    "name": "Dorette Bearham",
    "age": "13"
  }, {
    "name": "Ave Dobrovolski",
    "age": "51"
  }, {
    "name": "Doe Giacomelli",
    "age": "85"
  }, {
    "name": "Mona Dobsons",
    "age": "77"
  }, {
    "name": "Domenic Wyndham",
    "age": "86"
  }, {
    "name": "Chas Egel",
    "age": "28"
  }, {
    "name": "Chantal Dwyer",
    "age": "38"
  }, {
    "name": "Matthias McGuane",
    "age": "64"
  }, {
    "name": "Troy Salleir",
    "age": "87"
  }, {
    "name": "Hyacinthia Illing",
    "age": "30"
  }, {
    "name": "Erv Hinrichs",
    "age": "14"
  }, {
    "name": "Dorette Bearham",
    "age": "13"
  }, {
    "name": "Ave Dobrovolski",
    "age": "51"
  }, {
    "name": "Doe Giacomelli",
    "age": "85"
  }, {
    "name": "Mona Dobsons",
    "age": "77"
  }, {
    "name": "Domenic Wyndham",
    "age": "86"
  }, {
    "name": "Chas Egel",
    "age": "28"
  }, {
    "name": "Chantal Dwyer",
    "age": "38"
  }, {
    "name": "Matthias McGuane",
    "age": "64"
  }, {
    "name": "Troy Salleir",
    "age": "87"
  }, {
    "name": "Hyacinthia Illing",
    "age": "30"
  }, {
    "name": "Erv Hinrichs",
    "age": "14"
  }, {
    "name": "Dorette Bearham",
    "age": "13"
  }, {
    "name": "Ave Dobrovolski",
    "age": "51"
  }, {
    "name": "Doe Giacomelli",
    "age": "85"
  }, {
    "name": "Mona Dobsons",
    "age": "77"
  }, {
    "name": "Domenic Wyndham",
    "age": "86"
  }, {
    "name": "Chas Egel",
    "age": "28"
  }, {
    "name": "Chantal Dwyer",
    "age": "38"
  }, {
    "name": "Matthias McGuane",
    "age": "64"
  }, {
    "name": "Troy Salleir",
    "age": "87"
  }, {
    "name": "Hyacinthia Illing",
    "age": "30"
  }, {
    "name": "Erv Hinrichs",
    "age": "14"
  }, {
    "name": "Dorette Bearham",
    "age": "13"
  }, {
    "name": "Ave Dobrovolski",
    "age": "51"
  }, {
    "name": "Doe Giacomelli",
    "age": "85"
  }, {
    "name": "Mona Dobsons",
    "age": "77"
  }, {
    "name": "Domenic Wyndham",
    "age": "86"
  }, {
    "name": "Chas Egel",
    "age": "28"
  }, {
    "name": "Chantal Dwyer",
    "age": "38"
  }, {
    "name": "Matthias McGuane",
    "age": "64"
  }, {
    "name": "Troy Salleir",
    "age": "87"
  }, {
    "name": "Hyacinthia Illing",
    "age": "30"
  }, {
    "name": "Erv Hinrichs",
    "age": "14"
  }, {
    "name": "Dorette Bearham",
    "age": "13"
  }, {
    "name": "Ave Dobrovolski",
    "age": "51"
  }, {
    "name": "Doe Giacomelli",
    "age": "85"
  }, {
    "name": "Mona Dobsons",
    "age": "77"
  }, {
    "name": "Domenic Wyndham",
    "age": "86"
  }, {
    "name": "Chas Egel",
    "age": "28"
  }, {
    "name": "Chantal Dwyer",
    "age": "38"
  }, {
    "name": "Matthias McGuane",
    "age": "64"
  }, {
    "name": "Troy Salleir",
    "age": "87"
  }, {
    "name": "Hyacinthia Illing",
    "age": "30"
  }, {
    "name": "Erv Hinrichs",
    "age": "14"
  }, {
    "name": "Dorette Bearham",
    "age": "13"
  }, {
    "name": "Ave Dobrovolski",
    "age": "51"
  }, {
    "name": "Doe Giacomelli",
    "age": "85"
  }, {
    "name": "Mona Dobsons",
    "age": "77"
  }, {
    "name": "Domenic Wyndham",
    "age": "86"
  }, {
    "name": "Chas Egel",
    "age": "28"
  }, {
    "name": "Chantal Dwyer",
    "age": "38"
  }, {
    "name": "Matthias McGuane",
    "age": "64"
  }, {
    "name": "Troy Salleir",
    "age": "87"
  }, {
    "name": "Hyacinthia Illing",
    "age": "30"
  }, {
    "name": "Erv Hinrichs",
    "age": "14"
  }, {
    "name": "Dorette Bearham",
    "age": "13"
  }, {
    "name": "Ave Dobrovolski",
    "age": "51"
  }, {
    "name": "Doe Giacomelli",
    "age": "85"
  }, {
    "name": "Sutherlan Caulfield",
    "age": "35"
  }]}
  columns={[
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Age',
      accessor: 'age'
    }
  ]}
  showPagination
  showSearchFilter
/>
```

#### LegacyDataTable with custom overrides

The data table uses [react-table](https://react-table.js.org/#/story/readme) under the hood, and many of the
props used there can be used as overrides to customise LegacyDataTable as you need.

```jsx
<LegacyDataTable
  data={[
    {
      name: 'Tanner Linsley',
      age: 26
    },
    {
      name: 'Jason Maurer',
      age: 23
    }
  ]}
  columns={[
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Age',
      accessor: 'age'
    }
  ]}
  reactTableOverrides={{
    filterable: true,
    resizable: true
  }}
  showVerticalLines
/>
```
