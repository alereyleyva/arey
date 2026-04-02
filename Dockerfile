FROM oven/bun:1.3 AS build
WORKDIR /app
COPY . .
RUN bun i --frozen-lockfile
RUN bun run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
