import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  // Create a method that calculates the factorial of a number
  @Get('factorial/:number')
  getFactorial(@Param('number') number: string): { factorial: number } {
    const num = parseInt(number, 10);

    if (isNaN(num) || num < 0) {
      throw new Error('Invalid number. Please provide a non-negative integer.');
    }

    const result = this.calculateFactorial(num);
    return { factorial: result };
  }

  // Helper method to calculate factorial
  private calculateFactorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
