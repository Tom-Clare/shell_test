<?php

use Gt\DomTemplate\DocumentBinder;
use Gt\Input\Input;

function do_greet(DocumentBinder $binder, Input $input):void {
//	$yourName = $input->getString("your-name");
//	$binder->bindKeyValue("your-name", $yourName);
	$binder->bindData($input);
}