Here's the output:

```
 FAIL  ./example.test.js
  ✕ example (1009 ms)

  ● example

    expect(received).toBe(expected) // Object.is equality

    Expected: "data"
    Received: undefined

      10 |   doAsyncThing().then((r) => (result = r))
      11 |
    > 12 |   await waitFor(() => expect(result).toBe('data'))
         |                                      ^
      13 | })
      14 |

      at example.test.js:12:38
      at runWithExpensiveErrorDiagnosticsDisabled (node_modules/@testing-library/dom/dist/config.js:50:12)
      at checkCallback (node_modules/@testing-library/dom/dist/wait-for.js:62:75)
      at node_modules/@testing-library/dom/dist/wait-for.js:46:5
      at waitFor (node_modules/@testing-library/dom/dist/wait-for.js:37:10)
      at node_modules/@testing-library/dom/dist/wait-for.js:95:54
      at Object.asyncWrapper (node_modules/@testing-library/dom/dist/config.js:26:23)
      at waitFor (node_modules/@testing-library/dom/dist/wait-for.js:95:35)
      at Object.<anonymous> (example.test.js:12:9)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.085 s
Ran all test suites.
```
