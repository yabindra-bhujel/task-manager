<?php 

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('tasks', function (Blueprint $table) {
            // 'title' カラムを 'name' にリネーム
            $table->renameColumn('title', 'name');

            // 'start_date' と 'end_date' を追加
            $table->date('start_date')->nullable()->after('description');
            $table->date('end_date')->nullable()->after('start_date');

            // 'due_date' を削除
            $table->dropColumn('due_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tasks', function (Blueprint $table) {
            // 'name' を 'title' にリネーム
            $table->renameColumn('name', 'title');

            // 'start_date' と 'end_date' を削除
            $table->dropColumn('start_date');
            $table->dropColumn('end_date');

            // 'due_date' を再追加
            $table->dateTime('due_date')->nullable()->after('description');
        });
    }
};
