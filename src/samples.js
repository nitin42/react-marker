export const samples = {
  one: `
    Build encapsulated components that manage their own state, then compose them to make complex UIs.
    Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
  `,
  two: `
    It is important to remember that the reconciliation algorithm is an implementation detail. React could rerender the whole app on every action; the end result would be the same. Just to be clear, rerender in this context means calling render for all components, it doesn’t mean React will unmount and remount them. It will only apply the differences following the rules stated in the previous sections.
    We are regularly refining the heuristics in order to make common use cases faster. In the current implementation, you can express the fact that a subtree has been moved amongst its siblings, but you cannot tell that it has moved somewhere else. The algorithm will rerender that full subtree.
    Because React relies on heuristics, if the assumptions behind them are not met, performance will suffer.
    The algorithm will not try to match subtrees of different component types. If you see yourself alternating between two component types with very similar output, you may want to make it the same type. In practice, we haven’t found this to be an issue.
    Keys should be stable, predictable, and unique. Unstable keys (like those produced by Math.random()) will cause many component instances and DOM nodes to be unnecessarily recreated, which can cause performance degradation and lost state in child components.
  `
}
