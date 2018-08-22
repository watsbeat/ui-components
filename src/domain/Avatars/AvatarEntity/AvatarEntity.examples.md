#### Basic AvatarEntity 

```jsx
  <AvatarEntity
    initials='JW'
    statusDot='primary'
    primaryText='John Wick'
  />
```

```jsx
  <AvatarEntity
    initials='JW'
    statusDot='primary'
    primaryText='John Wick'
    secondaryText='Guy Killer'
  />
```

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

  <AvatarEntity
    initials='JW'
    statusDot='primary'
    statusIcon={
      <FontAwesomeIcon type='arrow-right' color='#432df3' />
    }
    primaryText='John Wick'
    secondaryText='Guy Killer'
    tertiaryText='Job Ending in 3 days'
  />
```

#### Compact

```jsx
  <AvatarEntity
    initials='JW'
    statusDot='success'
    primaryText='John Wick'
    isCompact
  />
```


```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

  <AvatarEntity
    initials='JW'
    statusDot='success'
    statusIcon={
      <FontAwesomeIcon type='arrow-right' color='#432df3' />
    }
    primaryText='John Wick'
    secondaryText='Guy Killer'
    isCompact
  />
```

#### isHoverable

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

  <AvatarEntity
    initials='JW'
    statusDot='primary'
    statusIcon={
      <FontAwesomeIcon type='arrow-right' color='#432df3' />
    }
    primaryText='John Wick'
    secondaryText='Guy Killer'
    tertiaryText='Job Ending in 3 days'
    isHoverable
  />
```

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

  <AvatarEntity
    initials='JW'
    statusDot='success'
    statusIcon={
      <FontAwesomeIcon type='arrow-right' color='#432df3' />
    }
    primaryText='John Wick'
    secondaryText='Guy Killer'
    isCompact
    isHoverable
  />
```

#### Legacy

Old pages used the `.person-tag`, `.profile-picture-badge` and `.badge-{size}` classes.
These should be avoided where possible, but are provided as legacy non-javascript support.

```jsx
<div>
  <div class="grid-x person-tag">
    <div class="avatar-container">
       <span class="profile-picture-badge badge-medium">
         <img src="http://www.gamasutra.com/db_area/images/news/2015/Oct/256722/KojimaCasualCloseUp.jpg" />
         <p>HK</p>
       </span>
    </div>
    <div class="display-name">
      <a href="https://www.google.com">
        Hideo Kojima
      </a>
      <div class="position-title">
        A Hideo Kojima Position Title
      </div>
    </div>
  </div>
  
  <div class="grid-x person-tag">
    <div class="avatar-container">
      <span class="initials-badge badge-medium">
        HK
        <span class="extended-leave-circle"></span>
      </span>
    </div>
    <div class="display-name">
      Hideo Kojima
      <div class="position-title">
        A Hideo Kojima Position Title
      </div>
    </div>
  </div>
</div>
```