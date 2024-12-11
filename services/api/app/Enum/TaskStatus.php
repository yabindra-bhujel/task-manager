<?php

namespace App\Enum;

enum TaskStatus {
    case PENDING;
    case IN_PROGRESS;
    case COMPLETED;
    case STOPPED;

    public static function fromString(string $status): TaskStatus
    {
        return match ($status) {
            'pending' => self::PENDING,
            'in_progress' => self::IN_PROGRESS,
            'completed' => self::COMPLETED,
            'stopped' => self::STOPPED,
            default => throw new \InvalidArgumentException("Invalid status: $status"),
        };
    }

    public function toString(): string
    {
        return match ($this) {
            self::PENDING => 'pending',
            self::IN_PROGRESS => 'in_progress',
            self::COMPLETED => 'completed',
            self::STOPPED => 'stopped',
        };
    }
}