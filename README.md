
# react-siblings

Small utility component that takes advantage of React 16's ability to return an array of elements
from a component. All children are given a `key` and returned as array.

```jsx
const MyComponent = props =>
    <Siblings>
        <div>foo</div>
        <div>bar</div>
    </Siblings>;
```
