<?php
	use Psr\Http\Message\ResponseInterface as Response;
	use Psr\Http\Message\ServerRequestInterface as Request;
	use Slim\Factory\AppFactory;


	use Tuupola\Middleware\HttpBasicAuthentication;
	use \Firebase\JWT\JWT;

	require __DIR__ . '/../vendor/autoload.php';
	require_once __DIR__ . '/../bootstrap.php';
	require_once __DIR__ . 'middleware.php';
	require_once __DIR__ . 'route.php';
	require_once __DIR__ . 'controller.php';


	$app = AppFactory::create();


	// Run app
	$app->run();
