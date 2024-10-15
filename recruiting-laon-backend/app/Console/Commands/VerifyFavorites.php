<?php

namespace App\Console\Commands;

use App\Jobs\IncrementFavorites;
use App\Models\Favorite;
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
        $yesterdayStart = Carbon::yesterday()->startOfDay()->addHours(3);
        $yesterdayEnd = Carbon::yesterday()->endOfDay()->addHours(3);

        info("Command ---> Yesterday: $yesterdayStart - $yesterdayEnd");

        $contents = Favorite::whereBetween('created_at', [$yesterdayStart, $yesterdayEnd])
            ->select('content_id')
            ->selectRaw('count(*) as total_favorited')
            ->groupBy('content_id')
            ->get();

            foreach($contents as $content){
                info("Command ---> ContentId: $content->content_id - Total Favorited: $content->total_favorited");
                IncrementFavorites::dispatch($content->content_id, $content->total_favorited);
            }
    }
}
