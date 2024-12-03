<?php

namespace App\Enums;

enum ProjectStatus
{
    const PENDING = 'pending';
    const IN_PROGRESS = 'in_progress';
    const COMPLETED = 'completed';

    public static function getValues(): array
    {
        return [
            self::PENDING,
            self::IN_PROGRESS,
            self::COMPLETED,
        ];
    }

    public static function getLabels(): array
    {
        return [
            self::PENDING => 'Pending',
            self::IN_PROGRESS => 'In Progress',
            self::COMPLETED => 'Completed',
        ];
    }

    public static function getLabel(string $value): string
    {
        return self::getLabels()[$value];
    }
}

