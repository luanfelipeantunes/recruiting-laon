<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;

class FavoriteCount implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $contentId;
    protected $totalFavorited;

    public function __construct($contentId, $totalFavorited)
    {
        $this->contentId = $contentId;
        $this->totalFavorited = $totalFavorited;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        info("Job --> ContentId: $this->contentId - Total Favorited: $this->totalFavorited");
        DB::table('favorite_count')->updateOrInsert(
            ['content_id' => $this->contentId],
            ['total_favorited' => DB::raw("total_favorited + $this->totalFavorited")]
        );
    }
}
