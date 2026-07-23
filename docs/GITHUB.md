# Publishing to GitHub Registry

After pushing this repository to a **public** GitHub repo, consumers can install components via GitHub paths (no Vercel deploy required).

For the fully automated hosted path (`init …/r/init.json` then `@modernui/…`), see [HOSTED.md](./HOSTED.md) and [CONSUMER.md](./CONSUMER.md).

## 1. Create and push the repository

```bash
git remote remove origin   # if still pointing at registry-template
git remote add origin https://github.com/tmdc-io/modern-ui-component.git
git add .
git commit -m "feat: ModernUI component registry"
git push -u origin main
git tag v1.0.0
git push origin v1.0.0
```

## 2. Validate the GitHub registry

```bash
npx shadcn@latest registry validate tmdc-io/modern-ui-component
```

## 3. Consumer install (GitHub)

```bash
# ModernUI base (theme + utils + components.json)
npx shadcn@latest init tmdc-io/modern-ui-component/init -y

# Or add foundation + components individually
npx shadcn@latest list tmdc-io/modern-ui-component
npx shadcn@latest add tmdc-io/modern-ui-component/theme
npx shadcn@latest add tmdc-io/modern-ui-component/utils
npx shadcn@latest add tmdc-io/modern-ui-component/button
npx shadcn@latest add tmdc-io/modern-ui-component/login-form
```

Pin a release:

```bash
npx shadcn@latest add tmdc-io/modern-ui-component/button#v1.0.0
```

## 4. Hosted alternative

After the docs app is deployed:

```bash
npx shadcn@latest init https://modern-ui-component.vercel.app/r/init.json -y
npx shadcn@latest add @modernui/button -y
```
