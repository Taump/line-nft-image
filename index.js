const Koa = require('koa');
const Router = require('@koa/router');
const svg2png = require("svg2png");

const app = new Koa();
const router = new Router();

router.get('/img/:id', async (ctx, next) => {
	const id = ctx.request.params.id;
	ctx.type = "application/json";
	
	return ({
		"title": `Loan #${id}`,
		"type": "object",
		"properties": {
			"name": {
				"type": "string",
				"description": "Identifies the asset to which this NFT represents"
			},
			"description": {
				"type": "string",
				"description": "Describes the asset to which this NFT represents"
			},
			"image": {
				"type": "string",
				"description": `https://blog-api.obby.space/image/${id}`
			}
		}
	});
});

router.get('/image/:id', async (ctx, next) => {

	const id = ctx.request.params.id;

	const img = `<svg width="300" height="300">
		<rect x="0" y="0" width="300" height="300" stroke="red" stroke-width="3px" fill="white"/>
		<text x="50%" y="50%" dominant-baseline="middle" style="font-size: 48px;" text-anchor="middle">
			LINE - ${id}
		</text>    
  	</svg>`;

	
	ctx.body = await svg2png(img, { width: 300, height: 300 });


	ctx.type = "image/png";
})

app
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(3030);

