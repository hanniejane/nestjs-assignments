import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  // Helper method to check if a number is prime
  private isPrime(number: number): boolean {
    if (number <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (number === 2) return true; // 2 is a prime number
    if (number % 2 === 0) return false; // Eliminate even numbers greater than 2
    
    // Check for factors up to the square root of the number
    for (let i = 3; i * i <= number; i += 2) {
      if (number % i === 0) return false;
    }
    
    return true;
  }

  // Endpoint to check if a number is prime
  @Get('prime/:number')
  checkPrime(@Param('number') number: number): { isPrime: boolean } {
    const isPrime = this.isPrime(Number(number));
    return { isPrime };
  }
}
