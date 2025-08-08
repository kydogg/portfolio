# Contributing to Portfolio App

## Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

### Scopes (optional)
- `ui`: UI components
- `nav`: Navigation
- `hero`: Hero section
- `theme`: Theming system
- `accessibility`: Accessibility improvements
- `performance`: Performance optimizations

### Examples
```
feat(ui): add dark mode toggle component
fix(nav): resolve mobile menu accessibility issue
docs: update README with testing instructions
perf(hero): optimize image loading with Next.js Image
test(utils): add unit tests for utility functions
```

## Branch Naming Convention

- `feature/description-of-feature`
- `fix/description-of-fix`
- `chore/description-of-task`
- `docs/description-of-docs`

## Development Workflow

1. Create feature branch from `main`
2. Make changes following code conventions
3. Write/update tests
4. Ensure all tests pass: `npm run test`
5. Check TypeScript: `npm run type-check`
6. Check linting: `npm run lint`
7. Commit with conventional commit message
8. Push branch and create PR
9. Address review feedback
10. Merge to main after approval