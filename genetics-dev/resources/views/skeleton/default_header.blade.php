@section('header')
	<nav class="navbar navbar-default" role="navigation">
	<div class="container">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		    	<span class="sr-only">Toggle navigation</span>
		    	<span class="icon-bar"></span>
		    	<span class="icon-bar"></span>
		    	<span class="icon-bar"></span>
		    </button>
		    <a class="navbar-brand emboss" href="/home"><img class="img-responsive" src="/images/logo.png" style="margin-top: -5px; margin-right: 10px;" width="70" alt='logo'></a>
		</div>

		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      		<ul class="nav navbar-nav">
				<li><a href="/graphs/allele">Allele Simulator</a></li>
				<li><a href="/graphs/genotype">Genotype Simulator</a></li>
        	</ul>

     		<ul class="nav navbar-nav navbar-right"> 
     			<li><a href="/help">Help</a></li>
     			<li><a href="/contact">Contact Us</a></li>
     		</ul>

         	<ul class="hidden nav navbar-nav navbar-right">
				<li><span class="label label-primary hidden-sm hidden-xs">DEV</span></li>
				<li class="divider">&nbsp;</li>
				<li><span class="label label-success hidden-sm hidden-xs">Last Update 6/29/15</span></li>
			</ul> 
			
        </div>
	</div>
</nav>
@stop