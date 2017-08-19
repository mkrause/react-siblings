
# react-siblings

Small utility component that takes advantage of React 16's ability to return an array of elements
from a component. All children are given a `key` and returned as array.

```jsx
import Siblings from 'react-siblings';

const MyComponent = props =>
    <Siblings>
        <div>foo</div>
        <div>bar</div>
    </Siblings>;
```

This is equivalent to:

```jsx
const MyComponent = props => [
    <div key="0">foo</div>,
    <div key="1">bar</div>
];
```
