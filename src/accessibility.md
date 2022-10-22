# Accessibility

Backlang can protect code elements from external access. The keywords controlling accessibility are called modifiers. Here is a list of all modifiers:

| Modifier  | Accessibility Rule                   |
|-----------|--------------------------------------|
| private   | only visible in owner                |
| public    | visible to all                       |
| protected | only visible in inheriting classes   |
| internal  | only visible in the current assembly |

| Attribute | Description                           |
|-----------|---------------------------------------|
| extern    | The function is implemented somewhere |

If no modifier is specified the default is private.
