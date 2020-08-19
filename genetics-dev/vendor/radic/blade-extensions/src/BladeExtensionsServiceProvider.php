<?php
/**
 * A laravel service provider to register the class into the the IoC container
 */
namespace Radic\BladeExtensions;


use App;
use Config;
use Exception;
use Illuminate\Contracts\Foundation\Application;
use Laradic\Support\ServiceProvider;
use Radic\BladeExtensions\Directives\AssignmentDirectives;
use Radic\BladeExtensions\Directives\DebugDirectives;
use Radic\BladeExtensions\Directives\ForeachDirectives;
use Radic\BladeExtensions\Directives\MacroDirectives;
use Radic\BladeExtensions\Directives\PartialDirectives;
use Radic\BladeExtensions\Renderers\BladeStringRenderer;

/**
 * A laravel service provider to register the class into the the IoC container
 *
 * @package        Radic\BladeExtensions
 * @version        2.1.0
 * @author         Robin Radic
 * @license        MIT License - http://radic.mit-license.org
 * @copyright      2011-2015, Robin Radic
 * @link           http://robin.radic.nl/blade-extensions
 *
 */
class BladeExtensionsServiceProvider extends ServiceProvider
{

    /** {@inheritDoc} */
    protected $configFiles = [ 'blade_extensions' ];

    /**
     * {@inheritDoc}
     */
    protected $dir = __DIR__;



    /** {@inheritDoc} */
    public function boot()
    {
        /** @var \Illuminate\Foundation\Application $app */
        $app = parent::boot();
    }

    /** {@inheritDoc} */
    public function register()
    {
        /** @var \Illuminate\Foundation\Application $app */
        $app = parent::register();

        $config = $app->make('config');

        AssignmentDirectives::attach($app);
        DebugDirectives::attach($app);
        ForeachDirectives::attach($app);
        PartialDirectives::attach($app);

        # Optional macro directives
        if ( array_key_exists('form', App::getBindings()) )
        {
            MacroDirectives::attach($app);
        }

        # Optional markdown compiler, engines and directives
        if ( $config->get('blade_extensions.markdown.enabled') )
        {
            if ( ! class_exists($config->get('blade_extensions.markdown.renderer')) )
            {
                throw new Exception('The configured markdown renderer class does not exist');
            }
            $app->register('Radic\BladeExtensions\Providers\MarkdownServiceProvider');
        }


        $app->bind('blade.string', 'Radic\BladeExtensions\Renderers\BladeStringRenderer');
    }
}
