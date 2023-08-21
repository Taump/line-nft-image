const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/img/:id', (ctx, next) => {

	const id = ctx.request.params.id;

	ctx.body = `<svg width="300" height="300">
		<rect x="0" y="0" width="300" height="300" stroke="red" stroke-width="3px" fill="white"/>
		<text x="50%" y="50%" dominant-baseline="middle" style="font-size: 48px;" text-anchor="middle">
			LINE - ${id}
		</text>    
  	</svg>`;

	ctx.type = "image/svg+xml";
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3030);

