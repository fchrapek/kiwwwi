<?php

namespace App\View\Blocks;

use App\View\Blocks\Block;

class Hero extends Block
{
    public function __construct()
    {
        $this->setId('hero');
        $this->setName('Hero');
        $this->setStructure([]);
    }

    public function parse(array $data): array
    {
        $data = array_replace_recursive($data, $this->getStructure());
        $data = apply_filters('firestarter_block_hero_data', $data);

        return $data;
    }
}
