<?php

namespace App\Console\Commands;

use App\Jobs\FavoriteCount;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class VerifyFavorites extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'favorites:verify';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command checks the films that were favorited that day and sends them to a job';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $yesterday = Carbon::yesterday();

        info("Command ---> Yesterday: $yesterday");

        $contents = DB::table('favorites')
            ->whereDate('created_at', $yesterday)
            ->select('content_id', DB::raw('count(*) as total_favorited'))
            ->groupBy('content_id')
            ->get();

            info($contents);

            foreach($contents as $content){
                info("Command ---> ContentId: $content->content_id - Total Favorited: $content->total_favorited");
                FavoriteCount::dispatch($content->content_id, $content->total_favorited);
            }


    }
}
