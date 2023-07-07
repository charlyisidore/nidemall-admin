# NideMall (admin)

Admin frontend for [NideMall](https://github.com/charlyisidore/nidemall-server).

## Installation

```bash
yarn install
```

## Usage

```bash
yarn run dev
```

## Deployment

Create `.env.production.local` (or edit `.env.production`):

```
VUE_APP_BASE_API = 'https://example.com/admin'
```

Build:

```bash
yarn run build
```

The output is located in `dist/`.

Copy NGINX configuration:

```bash
sudo cp nginx.conf /etc/nginx/conf.d/nidemall-admin.conf
```

Optional: Add the following to `/etc/nginx/conf.d/nidemall-server.conf` to redirect HTTP to HTTPS on the same port:

```
server {
    # ...
    error_page 497 https://$host:$server_port$request_uri;
    # ...
}
```

Reload NGINX configuration:

```bash
sudo nginx -t && sudo nginx -s reload
```

## License

[MIT](./LICENSE)
