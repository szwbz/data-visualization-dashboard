# Testing Guide

## Overview

This document provides guidelines and instructions for testing the data visualization dashboard application.

## Testing Strategy

Our testing approach includes:

1. **Unit Tests** - Testing individual components in isolation
2. **Integration Tests** - Testing component interactions
3. **End-to-End Tests** - Testing complete user workflows
4. **Visual Regression Tests** - Ensuring UI consistency

## Running Tests

### Unit Tests

```bash
npm test
```

Run tests in watch mode:
```bash
npm test -- --watch
```

### Coverage Report

```bash
npm test -- --coverage
```

## Testing Chart Components

### BarChart Component

**Test Cases:**
- Renders correctly with valid data
- Displays correct number of bars
- Shows tooltip on hover
- Handles empty data gracefully
- Responds to prop changes

**Example Test:**
```javascript
import { render, screen } from '@testing-library/react';
import BarChartComponent from './components/charts/BarChart';

test('renders bar chart with data', () => {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 }
  ];
  render(<BarChartComponent data={data} dataKey="value" xAxisKey="name" />);
  // Add assertions
});
```

### LineChart Component

**Test Cases:**
- Renders correctly with valid data
- Displays line with correct data points
- Shows tooltip on hover
- Handles empty data gracefully
- Applies custom line color

## Best Practices

1. **Write Clear Test Names** - Test names should describe what is being tested
2. **Test User Behavior** - Focus on how users interact with components
3. **Avoid Testing Implementation Details** - Test outputs, not internals
4. **Use Data-TestId Sparingly** - Prefer accessible queries
5. **Mock External Dependencies** - Keep tests isolated

## Continuous Integration

Tests run automatically on:
- Every pull request
- Commits to main branch
- Scheduled daily runs

## Coverage Goals

- **Minimum**: 80% code coverage
- **Target**: 90% code coverage
- **Components**: 95% coverage for critical components

## Debugging Tests

### Common Issues

1. **Async Issues**: Use `waitFor` or `findBy` queries
2. **Missing Context**: Wrap components in required providers
3. **DOM Cleanup**: Tests should clean up after themselves

### Debug Mode

```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```

## Contributing

When adding new features:
1. Write tests first (TDD approach recommended)
2. Ensure all tests pass
3. Verify coverage hasn't decreased
4. Update this document if needed

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Recharts Testing Guide](https://recharts.org/en-US/guide)
